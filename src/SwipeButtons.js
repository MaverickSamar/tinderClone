import React from 'react';
import './SwipeButtons.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="sb_repeat">
                <ReplayIcon size='large' />
            </IconButton>
            <IconButton className="sb_left">
                <CloseIcon size='large' />
            </IconButton>
            <IconButton className="sb_star">
                <StarRateIcon size='large' />
            </IconButton>
            <IconButton className="sb_right">
                <FavoriteIcon size='large' />
            </IconButton>
            <IconButton className="sb_lightning">
                <FlashOnIcon size='large' />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
