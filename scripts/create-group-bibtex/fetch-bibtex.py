#! /usr/bin/python

# Requires two libraries, that can be installed with pip:
# pip install requests bibtexparser

import requests
import bibtexparser
from datetime import datetime

def fetch_publications_range(author, start_year, end_year):
    # Handle the case where end_year is "-"
    if end_year == "-":
        end_year = datetime.now().year

    result = ""
    
    for year in range(int(start_year), int(end_year)):
        result += fetch_publications(author,year)

def fetch_publications(author,year):
    # Format the author name for the DBLP query
    author_query = author.replace(" ", "+")
    
    
    # Construct the DBLP API query URL
    url = f"https://dblp.org/search/publ/api?q=author:{author_query}:year:{year}&format=bib"

    print(url)
    
    # Fetch the publications from DBLP
    response = requests.get(url)
    
    # Check if the request was successful
    if response.status_code == 200:
        return response.text
    else:
        print(f"Failed to fetch publications for {author} from {year}")
        return ""

def merge_bibtex_entries(bibtex_entries):
    merged_bibtex = ""
    for entry in bibtex_entries:
        merged_bibtex += entry + "\n"
    return merged_bibtex

def main():
    # Read the list of authors and time windows from a file
    with open('authors_list.txt', 'r') as file:
        lines = file.readlines()
    
    bibtex_entries = []
    
    for line in lines:
        author, start_year, end_year = line.strip().split(';')
        start_year = start_year.strip()
        end_year = end_year.strip()
        
        # Fetch publications for the author within the specified time frame
        bibtex_data = fetch_publications_range(author.strip(), start_year, end_year)
        
        if bibtex_data:
            bibtex_entries.append(bibtex_data)
    
    # Merge all BibTeX entries into a single BibTeX file
    merged_bibtex = merge_bibtex_entries(bibtex_entries)
    
    # Save the merged BibTeX entries to a file
    with open('merged_publications.bib', 'w') as output_file:
        output_file.write(merged_bibtex)
    
    print("Merged BibTeX file created successfully: merged_publications.bib")

if __name__ == "__main__":
    main()
