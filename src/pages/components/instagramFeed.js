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
  const client = new Instagram();

  const response = await client.getPhotosByUsername({
    username: "lunar.toy",
  });

  return {
    props: {
      instagramPosts: response.user.edge_owner_to_timeline_media.edges,
    }, // will be passed to the page component as props
  };
}
