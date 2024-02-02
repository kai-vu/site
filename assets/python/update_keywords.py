"""This script fetches the headers of the thesis projects, extracts the keyword information, and ultimately updates /_data/keywords.yaml"""
import os
import yaml
import frontmatter


thesis_dir = './_theses_dir/'

def count_keyword(keyword_list):
    keyword_count = dict()
    keyword_list.sort()
    current_keyword = keyword_list[0]
    counter = 1
    for k in keyword_list[1:]:
        if current_keyword == k:
            counter += 1
        else:
            keyword_count[current_keyword] = counter
            current_keyword = k
            counter = 1
    return sorted(keyword_count.items(), key=lambda keyword: -keyword[1])

print("loading project files...")
keywords = []
project_files = [os.path.join(thesis_dir, f) for f in os.listdir(thesis_dir) if os.path.isfile(os.path.join(thesis_dir, f))]
for file in project_files:
    with open(file, "r") as project_file:
        project = frontmatter.load(project_file)
        if project.get('keywords') != None:
            keywords += project['keywords']

print("counting keywords....")
keyword_count = count_keyword(keywords)
print(keyword_count)
output_data = [{'keyword': k, 'count': v} for k,v in keyword_count]

print("saving to ./_data/keywords.yaml")
with open("./_data/keywords.yaml", "w") as stream:
    yaml.safe_dump(output_data, stream, indent=4, allow_unicode=True, sort_keys=False)
print("Done!")