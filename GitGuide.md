### Step 1
If you’re a collaborator, go to the Github Repo page, Git Clone the project, and cd into the directory. Don’t fork it! Forking will copy it in a new Repo to your Github page, but you don’t want that — you want to collaborate on the same Github Repo with your teammates.

### Step 2
![Cloning Repo](https://miro.medium.com/max/700/1*cY5xNLKiGczmwju9iJ3L0A.png)

```
$ git clone https://github.com/jakeTran42/Codelab-Bootstrap.git
```

### Step 3
If youre using window, please download the [GIT CLI tool](https://git-scm.com/download/win). 

### Step 4
In window, either open your GIT bash **or** command prompt. On Mac, open your terminal. Locate the github repository that you had cloned and go to the root directory.

```
$ cd Codelab-Bootstrap (or something similar to this)
```

### Step 5 (Branches)
When you’re using git to work on the same project with multiple people, there’s one central rule you must follow: 

THE MASTER BRANCH SHOULD ALWAYS BE DEPLOYABLE 

The way to keep Master deployable is to create new branches for new features and merge them into Master when they’re completed. Here’s how that works. Read up on branches and how it work [here](https://www.atlassian.com/git/tutorials/using-branches#:~:text=In%20Git%2C%20branches%20are%20a,branch%20to%20encapsulate%20your%20changes.)

For now, you can do:

```
$ git co -b create_components
```

“co” is short for “checkout” which is used to switch between branches. Adding the “-b” and a name at the end creates a new branch and then moves into that new branch for us.

You should be able to verify this with the command:

```
$ git branch
```

which will produce something similar to this:

```
master
* new_components <-- This astrisk(*) will indicate that youre working on that branch currently
```

then you can use these command to add the file to commit, and commit them to repository.

```
git status
git add
git commit -m "commit message"
```

[Read this to understand git command](https://hackernoon.com/understanding-git-fcffd87c15a3)

### Step 6 (Pushing your changes)

To push your changes to the github repository. Use the command 

```
$ git push
```

Now go to the Github Repo page. You should see the branch you pushed up in a yellow bar at the top of the page with a button to “Compare & pull request”. This is called a "pull request." This means that you are submitting your changes to a branch on github and are requesting a teammate or a person in charge if merging the changes to merge the "branch" and the "master" git together. For now, you can verify your own changes to the github repository but in general, it is better for one experienced person to be in charge of that. 


Click “Compare & pull request”. This will take you to the “Open a pull request” page. From here, you should write a brief description of what you actually changed. And you should click the “Reviewers” tab and select whoever your team decided would be the “Merge Master”. When you’re done, click “Create pull request". For now, you can merge your own request.

![Merging](https://miro.medium.com/max/700/1*uildE3NOi5GUzV9Ua_US-Q.png)


### Step 7 (Merging Pull Requests)

[Optional] Go ahead and click the “Add your review” button. When you click “Submit review” on the “Review changes” drop-drown your review will now exist as a comment on the pull request thread.

![Merging](https://miro.medium.com/max/700/1*PzcyyMvbXcqLpEYX2jegiQ.png)

When you’re satisfied with the pull request, go to the bottom of the pull request and click “Merge pull request”.

![Submit merge](https://miro.medium.com/max/700/1*D7vtotpgLhtS7pysz3pxjQ.png)

You’ll then see a “Pull request successfully merged and closed” message and a button to “Delete branch” which you should click.

....

And thats pretty much it for a quick guide to working on a team. 

### Important to note

1. Please review carefully what changes are you making to the repository

2. Do not delete or replace any existing file that isnt yours. Make sure then changes are only made to the file you are working on. Or elt teammate know you are changing their file.


## TLDR

1. Clone repository
2. Make change to project
3. GO to root directory
4. git co -b create_components (or call it anything you want)
5. git branch (make sure youre on the right branch)
6. git status
7. git add .
8. git commit -m "add components"
9. git push
10. Follow the step above for merging afterward on github.com (repository)