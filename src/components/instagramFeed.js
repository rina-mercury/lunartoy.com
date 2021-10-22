import React, { useState } from "react";
import Instagram from "instagram-web-api";
import Link from "next/link";

export default function InstagramFeed({ instagramPosts = [] }) {
  React.useEffect(() => {
    console.log(instagramPosts);
  }, [instagramPosts]);

  return (
    <>
      <h2>
        <a href="https://www.instagram.com/lunar.toy/">
          Follow Me on Instagram
        </a>
        .
      </h2>

      <ul>
        {/* let's iterate through each of the
         instagram posts that were returned
         from the Instagram API*/}
        {instagramPosts.map(({ node }, i) => {
          return (
            // let's wrap each post in an anchor tag
            // and construct the url for the post using
            // the shortcode that was returned from the API
            <li key={i}>
              <a
                href={`https://www.instagram.com/p/${node.shortcode}`}
                key={i}
                aria-label="view image on Instagram"
              >
                {/* set the image src equal to the image
                url from the Instagram API*/}
                <img
                  src={node.thumbnail_src}
                  alt={
                    // the caption with hashtags removed
                    node.edge_media_to_caption.edges[0].node.text
                      .replace(/(#\w+)+/g, "")
                      .trim()
                  }
                />
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export async function getStaticProps(context) {
  // create a new client to communicate with  Instagram
  // this service requires authentication
  //with username and password parameters
  const client = new Instagram({
    username: "lunar.toy",
    password: "12Er3456",
  });

  let posts = [];
  try {
    await client.login();
    // request photos for a specific instagram user
    const instagram = await client.getPhotosByUsername({
      username: "lunar.toy",
    });

    if (instagram["user"]["edge_owner_to_timeline_media"]["count"] > 0) {
      // if we receive timeline data back
      //  update the posts to be equal
      // to the edges that were returned from the instagram API response
      posts = instagram["user"]["edge_owner_to_timeline_media"]["edges"];
    }
  } catch (err) {
    console.log(
      "Something went wrong while fetching content from Instagram",
      err
    );
  }
  setInstagramPosts(posts);
}
