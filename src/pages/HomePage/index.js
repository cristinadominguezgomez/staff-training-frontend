import "../HomePage/style.css";
import useExercises from "../../hooks/useExercises";
import { useEmployeeTokenContext } from "../../context/EmployeeTokenContext";
import { Carousel } from "antd";
import React from "react";
import { ExercisesList } from "../../components/ExercisesList";

export const HomePage = () => {
  const { employee } = useEmployeeTokenContext();
  const { exercises, loading, error, removeExercise } = useExercises();
  if (loading) return <p>Cargando exercises...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div className="home-page">
      <div className="content">
        <div className="info">
          <div className="info-content container">
            <div className="message">
              <h3>Welcome to staff training. </h3>
              <p>
                If you are a member of our work team, you can register and log
                in to see all the exercises that are available on our page, to
                help you plan your classes and training.
              </p>
              <p> Thank you!</p>
            </div>
            <div className="table">
              <h3>Working Hours</h3>
              <table>
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Hour</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Monday</td>
                    <td>7 a.m. / 11 p.m.</td>
                  </tr>
                  <tr>
                    <td>Tuesday</td>
                    <td>8 a.m. / 12 p.m.</td>
                  </tr>
                  <tr>
                    <td>Wednesday</td>
                    <td>7 a.m. / 11 p.m.</td>
                  </tr>
                  <tr>
                    <td>Thursday</td>
                    <td>8 a.m. / 12 p.m.</td>
                  </tr>
                  <tr>
                    <td>Friday</td>
                    <td>7 a.m. / 11 p.m.</td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>7 a.m. / 3 p.m.</td>
                  </tr>
                  <tr>
                    <td>Sunday</td>
                    <td>CLOSED</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Carousel autoplay={true}>
          <div className="carousel-item">
            <img src="/images/carousel1.webp" alt="" />
          </div>
          <div className="carousel-item">
            <img src="/images/carousel2.webp" alt="" />
          </div>
          <div className="carousel-item">
            <img src="/images/carousel3.jpeg" alt="" />
          </div>
          <div className="carousel-item">
            <img src="/images/carousel4.jpeg" alt="" />
          </div>
          <div className="carousel-item">
            <img src="/images/carousel5.webp" alt="" />
          </div>
        </Carousel>
      </div>
      <div className="container">
        <div className="our-process">
          <h3>Our process</h3>
          <div className="our-process-content">
            <div>
              <div className="icon">
                <img src="/images/icon5.png" alt="icon5" />
              </div>
              <p>ANALYSE YOUR GOAL</p>
            </div>
            <div>
              <div className="icon">
                <img src="/images/icon6.png" alt="icon6" />
              </div>
              <p>WORK HARD ON IT</p>
            </div>
            <div>
              <div className="icon">
                <img src="/images/icon7.png" alt="icon7" />
              </div>
              <p>IMPROVE YOUR PERFORMANCE</p>
            </div>
            <div>
              <div className="icon">
                <img src="/images/icon8.png" alt="icon8" />
              </div>
              <p>ACHIEVE YOUR DESTINY</p>
            </div>
          </div>
        </div>
        {employee && (
          <div className="our-exercises">
            <h3>Our Exercises</h3>
            <ExercisesList
              exercises={exercises.slice(0, 3)}
              removeExercise={removeExercise}
            />
          </div>
        )}
      </div>
    </div>
  );
};
