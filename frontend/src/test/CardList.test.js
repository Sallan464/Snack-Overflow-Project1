import { getSortedPosts, posts } from "../data/Posts";

describe('posts list', () => {
    test('getSortedPosts returns array of posts sorted by score', () => {
        const sorted = getSortedPosts()
        for (let i = 0; i < sorted.length - 2; i++) {
            expect(sorted[i].score >= sorted[i + 1].score);
        }
    })
})