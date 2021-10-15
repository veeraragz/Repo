import React,{useState,useRef,useEffect} from 'react'
import styles from "../styles/Audioplayer.module.css";
import {BsArrowLeft} from 'react-icons/bs'
import {BsArrowRight} from 'react-icons/bs'
import {BsPlay} from 'react-icons/bs'
import {BsPause} from'react-icons/bs'
const Audioplayer=()=>{
    
    const[isPlaying,setIsPlaying]= useState(false);
    const[duration,setDuration] = useState(0);
    const[currentTime,setcurrentTime]=useState(0);

    const audioplayer =useRef();
    const progressBar =useRef();
    const animationRef =useRef();


         useEffect(() =>{
         const seconds=Math.floor(audioplayer.current.duration);
         setDuration(seconds);
         progressBar.current.max = seconds;

         },[audioplayer?.current?.loadedmetadata,audioplayer?.current?.readyState]);
    
         const calculateTime = (secs) =>{
         const minuits=Math.floor(secs/60);
         const returnedMinuits= minuits<10 ? `0${minuits}`:`${minuits}`;
         const seconds= Math.floor(secs%60);
         const returnedSeconds= seconds <10 ? `0${seconds}`:`${seconds}`;
         return `${returnedMinuits} : ${returnedSeconds}`;
         }
         
        const togglePlayPause = () =>{
            const prevValue=isPlaying;
            setIsPlaying(!prevValue);
            if(!prevValue){
                audioplayer.current.play();
                animationRef.current=requestAnimationFrame(whilePlaying)
            }else{
                audioplayer.current.pause();
                cancelAnimationFrame(animationRef.current);
            }
        }

        const whilePlaying = ()=> {
            progressBar.current.value=audioplayer.current.currentTime;
             changePlayerCurrentTime();
             animationRef.current=requestAnimationFrame(whilePlaying);
        }

        const changeRange=()=>{
            audioplayer.current.currentTime = progressBar.current.value;
            changePlayerCurrentTime();
        }
        const changePlayerCurrentTime=()=>{
            progressBar.current.style.setProperty('--seek-before-width',`${progressBar.current.value / duration * 100}%`);
            setcurrentTime(progressBar.current.value);     
        }
        const backThirty=()=>{
            console.log(progressBar.current.value -30);
            progressBar.current.value=Number(progressBar.current.value)-30;
            changeRange();
        }
        const forwardThirty=()=>{
            console.log(progressBar.current.value +30);
            progressBar.current.value=Number(progressBar.current.value)+30;
            changeRange();
        }
    
         return(
    
            <div className={styles.Audioplayer}>
            <audio ref = {audioplayer}src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"></audio>

            <button className = {styles.forwardBackward} onClick ={backThirty}><BsArrowLeft/></button>

            <button onClick={togglePlayPause}className={styles.PlayPause}>

                {isPlaying ? <BsPause/> : <BsPlay className={styles.Play}/>}
            </button>

            <button className = {styles.forwardBackward} onClick ={forwardThirty}><BsArrowRight/></button>

            {/*current time*/}
            <div className={styles.currentTime}>{calculateTime(currentTime)}</div>

            {/*progress bar*/}
             <div>
                <input type ="range" className ={styles.progressBar} defaultValue ="0" ref = {progressBar} onChange={changeRange}/>
            </div>
            {/*duration*/}
            <div className={styles.duration}>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>

        </div>
    )
    }
export {Audioplayer}