import { Block, Typography } from "@/components";
import { BlockVideo } from "@/types";
import { useFiles } from "@/hooks";
import { generateVideoEmbed } from "@/utils";

export default function Video(props: BlockVideo) {
  const { fileUrl } = useFiles();

  const url = () => {
    if (props.type === "file" && props.video_file) {
      return fileUrl(props.video_file as string);
    }

    if (props.type === "url" && props.video_url) {
      return props.video_url;
    }

    return null;
  };
  if (!props) return null;

  return (
    <Block.Container id={props.id}>
      {props.title && <Typography.Title>{props.title}</Typography.Title>}
      {props.headline && <Typography.Headline content={props.headline} size='lg' />}
      <iframe className='w-full aspect-video' loading='lazy' src={generateVideoEmbed(url() ?? "")} allow='autoplay; fullscreen; picture-in-picture' allowFullScreen title={props.title ?? ""}></iframe>
    </Block.Container>
  );
}
