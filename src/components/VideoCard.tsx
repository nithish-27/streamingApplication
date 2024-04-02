import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface Video {
  title: string;
  thumbnail: string;
  channelName: string;
  views: string;
  duration: string;
  uploadedDateTime: string;
}

const styles: { [key: string]: React.CSSProperties } = {
  root: {
    backgroundColor: "gray",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    maxWidth: 400,
    marginBottom: 5,
    color: "white",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "10px",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "100%",
    height: 200,
  },
};

const VideoCard: React.FC<{ video: Video }> = ({ video }) => {
  return (
    <Card sx={styles.root}>
      <CardMedia
        component="img"
        image={video.thumbnail}
        title={video.title}
        sx={styles.cover}
      />
      <div style={styles.details}>
        <CardContent style={styles.content}>
          <Typography
            component="h6"
            variant="h6"
            fontWeight={600}
            marginBottom={2}
          >
            {video.title}
          </Typography>
          <Typography variant="subtitle1" color="white">
            Channel: {video.channelName}
          </Typography>
          <Typography variant="subtitle1" color="white">
            Views: {video.views}
          </Typography>
          <Typography variant="subtitle1" color="white">
            Time: {video.duration} | Date:{" "}
            {new Date(video.uploadedDateTime).toLocaleDateString()}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default VideoCard;
