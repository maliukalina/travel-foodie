import React from "react";
import IconButton from '@mui/material/IconButton';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';



function Bookmark() {
  return(


<IconButton size="large"  style={{position: 'absolute',}}>
          <BookmarkBorderIcon aria-label="bookmarks icon" />
</IconButton>

)
}

export default Bookmark