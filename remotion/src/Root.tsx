import { Composition } from "remotion";
import { BackgroundVideo } from "./BackgroundVideo";

export const RemotionRoot = () => (
  <Composition
    id="main"
    component={BackgroundVideo}
    durationInFrames={300}
    fps={30}
    width={1920}
    height={1080}
  />
);
