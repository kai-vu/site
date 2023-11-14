
# Intructions making adjustments

Hi all, I figured including some instructions on how to maintain our website. Note that this is really just a start and nowhere near comprehensive, so please get in touch with me/someone else that knows website stuff if you are confused. 

Essentially, there are two options; one for quick content updates and another for more severe design changes.

## Quick content updates
This one is really easy. First, make sure to be logged into a github account that has access to the KAI repository (if you are looking at this text from github, this should be covered). Aftwards, go to `https://github.dev/kai-vu/site` to access the github development environment. This should get you in an environment that looks like this:
![github developement environment](/images/readme/github_dev_env.png)

Here, the main webpages are located in the root directory. Webpages for thesis projects are located in the `/theses` folder. Changes are made by navigating to the `.html` or `.md` file of the page that is to be adjusted and simply editing the file while in your webbrowser. 

Once you are done, there should be a notification in the `source controle menu`, as indicated here:
![updated file notification](/images/readme/updated_file.png)

From there you go through the regular steps of making a commit to the main branch: write a descriptive update message (just "_update_" is not enough...), press `commit&push`, and hope there are no merge conflicts.  


## Design updates
The issue with the github development environment is that it (as far as I know) doesn´t allow you to test your updates before pushing it to the main branch. Therefore, I recommend hosting a local copy of the website instead. This is more tedious, as the website is build using jekyll, which is a ruby gem. Therefore, you will need to follow the [following guide](https://jekyllrb.com/docs/installation/). *NOTE*: there are some recommendations that are not mentioned in the official documentation:
- If you run into the `'mkmf.rb can't find header files for ruby'` error, you are using an incorrect ruby installation. You need to install `ruby-dev`, instead of just `ruby`. This can be a bit annoying to fix. I would recommend following [this guide](https://cloud.google.com/ruby/docs/setup) as it teaches you how to set-up different ruby environments.
- Similarly to working with python, it is recommended to make a seperate ruby environment for every project. Several environment managers exist such as [rbenv](https://github.com/rbenv/rbenv) and [rvm](https://github.com/rvm/rvm). 

Once Jekyll is running, the local server in running as well, meaning you can access the website at `http://127.0.0.1:4000/index`. Now you can start editing the website using your favorite editor. In genereral, the server that is running in the background will automatically update when you save your changes. Only changes made to `config.yml` will require you to restart the Jekyll server. 


