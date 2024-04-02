import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import VideoCard from "./components/VideoCard";
import videosData from "./videos.json";

interface Video {
  title: string;
  thumbnail: string;
  channelPicture: string;
  channelName: string;
  category: string;
  duration: string;
  views: string;
  uploadedDateTime: string;
}

const styles: { [key: string]: React.CSSProperties } = {
  root: {
    flexGrow: 1,
    padding: "16px",
    textAlign: "center",
  },
  categoryList: {
    marginTop: "20px",
    marginBottom: "16px",
  },
  categoryButton: {
    background: "black",
    color: "white",
    marginRight: "8px",
  },
  activeCategoryButton: {
    background: "#00bfff",
    color: "white",
    marginRight: "8px",
  },
};

const App: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [filteredVideos, setFilteredVideos] = useState<Video[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    setVideos(videosData);
    setFilteredVideos(videosData);
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    const filteredResults = videos.filter((video) =>
      video.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredVideos(filteredResults);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredVideos(videos);
    } else {
      setFilteredVideos(videos.filter((video) => video.category === category));
    }
  };

  return (
    <div style={styles.root}>
      <TextField
        style={{ backgroundColor: "white", borderRadius: "7px" }}
        variant="outlined"
        label="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        margin="normal"
        size="small"
      />
      <div style={styles.categoryList}>
        <Button
          style={
            activeCategory === "All"
              ? styles.activeCategoryButton
              : styles.categoryButton
          }
          onClick={() => handleCategoryClick("All")}
        >
          All
        </Button>
        {Array.from(new Set(videos.map((video) => video.category))).map(
          (category, index) => (
            <Button
              key={index}
              style={
                activeCategory === category
                  ? styles.activeCategoryButton
                  : styles.categoryButton
              }
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Button>
          )
        )}
      </div>
      <Grid container spacing={2} sx={{ marginTop: "30px" }}>
        {filteredVideos.map((video, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <VideoCard video={video} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default App;
