import { Block } from ".";
import { Base, Typography } from "..";
import { BlockGallery, BlockGalleryFile, File } from "@/types";

export default function Gallery(props: BlockGallery) {
  const galleryItems = props.gallery_items?.map((item: BlockGalleryFile) => {
    return item.directus_files_id as File;
  });
  return (
    <Block.Container id={props.id}>
      {props.title && <Typography.Title>{props.title}</Typography.Title>}
      {props.headline && <Typography.Headline content={props.headline} size='lg' />}
      {galleryItems && galleryItems.length > 0 && <Base.Gallery items={galleryItems} />}
    </Block.Container>
  );
}
