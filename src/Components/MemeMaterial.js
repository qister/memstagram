import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';



//Стилизация материал

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },


  
});

//

export default function MemeMaterial_(props) {

    const classes = useStyles();

    const [index, setIndex] = useState(2) 

    let id = index
    
    let {list} = props
    let {tapLike, newMeme} = props

    function incrementIndex() {
      setIndex(index < list.length -1 ? index + 1 : index)
    }
  
    function decrementIndex() {
      setIndex(index > 0 ? index - 1 : index)
    }
    
    const currentMeme = list.find(meme => meme.id === id)

    const likeButtonText = () => {
        return currentMeme.liked ? '🧡' : '🖤'
    }

    const bestMeme = {
        id: 5,
        liked: true,
        author: 'Best',
      } 

    return (
      <React.Fragment>
          <Box display='flex' justifyContent='space-between'>
            <span className='top-element'>
              <ArrowBackIcon onClick={decrementIndex}/>
              <ArrowForwardIcon onClick={incrementIndex}/>
            </span>
              <Button variant="outlined" color='secondary' size='small' onClick={() => newMeme(bestMeme)}>
                      add meme
              </Button>
          </Box>

          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar>{currentMeme.author}</Avatar> 
              }
              title='Elon Musk'
            />
          </Card>
          
              
            
            
            
    
          <div className='meme'>
              <img className='big' src={`/memes/${id}.jpg`} alt={""} />
          </div>
          <button 
              onClick={() => tapLike(id)}
              className='like'
              >
              {likeButtonText()}
          </button>
      </React.Fragment>
    )
  }