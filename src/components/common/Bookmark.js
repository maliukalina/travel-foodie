import React from "react";
import IconButton from '@mui/material/IconButton';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';



function Bookmark() {
  const [clicked, setClicked] = useState(false)
  return(
<>

<IconButton onClick={handleClick} value={false} name={item.id} id={item.id} size="large"  style={{position: 'absolute', paddingLeft:"300px"}}>
         
         {clicked ? <BookmarkIcon /> : <BookmarkBorderIcon /> }
         
         </IconButton>
</>
)
}

export default Bookmark