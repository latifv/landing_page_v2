import { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./Carousel.module.scss";
import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight,
} from "react-icons/hi";
import { AiFillLinkedin } from "react-icons/ai";
function Carousel({ items, active,teamsInfo  }) {
  const [state, setState] = useState({
    items,
    active,
    direction: "",
  });

  function generateItems() {
    var items = [];
    var level;
    for (var i = state.active - 2; i < state.active + 3; i++) {
      var index = i;
      if (i < 0) {
        index = state.items.length + i;
      } else if (i >= state.items.length) {
        index = i % state.items.length;
      }
      level = state.active - i;
      
      items.push(
        <CSSTransition
          key={index}
          timeout={500}
          classNames={{
            enter: `${state.direction}-enter`,
            enterActive: `${state.direction}-enter-active`,
            exit: `${state.direction}-exit`,
            exitActive: `${state.direction}-exit-active`,
          }}
        >
          <Item
            className={styles.itemWrapper}
            id={state.items[index]}
            level={level}
            linkedinLink={teamsInfo[index].link}
            />
          
        </CSSTransition>
        
      );
      
    }
    return items;
  }

  function moveLeft() {
    var newActive = state.active;
    newActive--;
    setState({
      ...state,
      active: newActive < 0 ? state.items.length - 1 : newActive,
      direction: "left",
    });
  }

  function moveRight() {
    var newActive = state.active;
    setState({
      ...state,
      active: (newActive + 1) % state.items.length,
      direction: "right",
    });
  }

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        margin: "4rem",
        position: "relative",
        left: "-65px",
      }}
      className={`${styles.noselect} ${styles.wrapper} `}
    >
      <div
        className={`${styles.arrow} ${styles.arrow_left}`}
        onClick={moveLeft}
      >
        <HiOutlineArrowCircleLeft />
      </div>
      <TransitionGroup
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          gap: "1rem",
        }}
        className={`${styles.carousel} ${state.direction}`}
      >
        {generateItems()}
      </TransitionGroup>
      <div
        className={`${styles.arrow_right} ${styles.arrow}`}
        onClick={moveRight}
      >
        <HiOutlineArrowCircleRight />
      </div>
    </div>
  );
}

function Item({ id, level, linkedinLink }) {
  const [hover, setHover] = useState(false);
  const name = id.split("/").pop().split(".")[0];
  const hasLinkedinLink = !!linkedinLink;

  return (
    <div
      className={`${styles.item} ${styles["level" + level]}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={{ height: "100%", position: "relative", display: "flex", alignItems: "center" }}>
        <img src={id} alt="" />
        {hover && (
          <div className={styles.textOverlay}>
            {name} 
            {hasLinkedinLink && (
              <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin size={32} color="#0e76a8" className={styles.linkedinIcon}  style={{paddingTop: "5px"}}/>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Carousel;
