import { client } from "./sanity.client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client)

export default function urlFor(source){
  console.log('SOURCE EN URLFOR ###############@@@@@@@@@@@@@@@@@@@@@@@')
  console.log(source)
  return builder.image(source)
}
