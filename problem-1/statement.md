**Problem 1**

- In this problem, we have 2 types of items: albums and posts.
- We need to display lists of both albums and posts, where items are filtered by userId.
- For albums we simply display the title, for posts - the title and the body.
- At the moment, we have two components to render the lists: AlbumList and PostList.
- The problem is that the logic of fetching the items and filtering them is duplicated.
- Your task is to find a way to encapsulate the duplicated logic in one component and reuse it.

Sandbox link: https://codesandbox.io/s/problem-1-4b0hm
