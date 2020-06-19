import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ProfileBadgeComponent} from './profiles'
import {FeedComponent, PostsComponent, PostDetailComponent} from './posts'
import * as serviceWorker from './serviceWorker';

const appEl = document.getElementById('root')
if (appEl) {
    ReactDOM.render(<App />, appEl);
}
const e = React.createElement
const postsEl = document.getElementById("postme-2")
if (postsEl) {
    ReactDOM.render(
        e(PostsComponent, postsEl.dataset), postsEl);
}

const postFeedEl = document.getElementById("postme-2-feed")
if (postFeedEl) {
    ReactDOM.render(
        e(FeedComponent, postFeedEl.dataset), postFeedEl);
}

const postDetailElements = document.querySelectorAll(".postme-2-detail")

postDetailElements.forEach(container=> {
    ReactDOM.render(
        e(PostDetailComponent, container.dataset),
        container);
})

const userProfileBadgeElements = document.querySelectorAll(".postme-2-profile-badge")

userProfileBadgeElements.forEach(container=> {
    ReactDOM.render(
        e(ProfileBadgeComponent, container.dataset), 
        container);
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
