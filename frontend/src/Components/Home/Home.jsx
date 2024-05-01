import React from "react";
import Header from "../Header/Header";
import style from "./Home.module.css";
import image1 from "../../Images/all.jpg";
import image2 from "../../Images/food.jpg";
import image3 from "../../Images/health.jpg";
import image4 from "../../Images/travel.jpg";
import image5 from "../../Images/movies.jpg";
import image6 from "../../Images/education.jpg";

const Home = () => {
  return (
    <>
      <section>
        <Header />

        <section className={style.story_container}>
          <div className={style.story_categories}>
            <div className={style.story_card}>
              <div className={style.story_box}>
                <img src={image1} alt="all" className={style.story_bg_img} />
                <h2 className={style.story_title}>All</h2>
              </div>
            </div>
            <div className={style.story_card}>
              <div className={style.story_box}>
                <img src={image2} alt="all" className={style.story_bg_img} />
                <h2 className={style.story_title}>Food</h2>
              </div>
            </div>
            <div className={style.story_card}>
              <div className={style.story_box}>
                <img src={image3} alt="all" className={style.story_bg_img} />
                <h2 className={style.story_title}>Health & fitness</h2>
              </div>
            </div>
            <div className={style.story_card}>
              <div className={style.story_box}>
                <img src={image4} alt="all" className={style.story_bg_img} />
                <h2 className={style.story_title}>Travel</h2>
              </div>
            </div>
            <div className={style.story_card}>
              <div className={style.story_box}>
                <img src={image5} alt="all" className={style.story_bg_img} />
                <h2 className={style.story_title}>Movies</h2>
              </div>
            </div>
            <div className={style.story_card}>
              <div className={style.story_box}>
                <img src={image6} alt="all" className={style.story_bg_img} />
                <h2 className={style.story_title}>Education</h2>
              </div>
            </div>
          </div>
        </section>

        <section className={style.top_story_section}>
          <div className={style.top_story_container}>
            <h2>Top Stories About Food </h2>
          </div>
          <div className={style.stories_card_container}>
            <h3 className={style.no_story_subtitle}>No stories Available</h3>
          </div>
          <div className={style.button_section}>
            <button className={style.see_more_food_btn}>See More</button>
          </div>
        </section>

        <section className={style.top_story_section}>
          <div className={style.top_story_container}>
            <h2>Top Stories About Health & Fitness </h2>
          </div>
          <div className={style.stories_card_container}>
            <h3 className={style.no_story_subtitle}>No stories Available</h3>
          </div>
          <div className={style.button_section}>
            <button className={style.see_more_health_btn}>See More</button>
          </div>
        </section>

        <section className={style.top_story_section}>
          <div className={style.top_story_container}>
            <h2>Top Stories About Travel </h2>
          </div>
          <div className={style.stories_card_container}>
            <h3 className={style.no_story_subtitle}>No stories Available</h3>
          </div>
          <div className={style.button_section}>
            <button className={style.see_more_travel_btn}>See More</button>
          </div>
        </section>

        <section className={style.top_story_section}>
          <div className={style.top_story_container}>
            <h2>Top Stories About Movies </h2>
          </div>
          <div className={style.stories_card_container}>
            <h3 className={style.no_story_subtitle}>No stories Available</h3>
          </div>
          <div className={style.button_section}>
            <button className={style.see_more_movies_btn}>See More</button>
          </div>
        </section>

        <section className={style.top_story_section}>
          <div className={style.top_story_container}>
            <h2>Top Stories About Education </h2>
          </div>
          <div className={style.stories_card_container}>
            <h3 className={style.no_story_subtitle}>No stories Available</h3>
          </div>
          <div className={style.button_section}>
            <button className={style.see_more_education_btn}>See More</button>
          </div>
        </section>

        <section className={style.top_story_section}>
          <div className={style.top_story_container}>
            <h2>Top Stories About food </h2>
          </div>
          <div className={style.stories_card_container}>
            <h3 className={style.no_story_subtitle}>No stories Available</h3>
          </div>
          <div className={style.button_section}>
            <button className={style.see_more_food_btn}>See More</button>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
