import React, { useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { year: 2018, percentage1: 45, percentage2: 65 },
  { year: 2019, percentage1: 62, percentage2: 78 },
  { year: 2020, percentage1: 78, percentage2: 90 },
  { year: 2021, percentage1: 55, percentage2: 75 },
  { year: 2022, percentage1: 88, percentage2: 92 },
  { year: 2023, percentage1: 72, percentage2: 85 },
];

const GraphtWithImg = () => {
  useEffect(() => {
    const skillPers = document.querySelectorAll(".subscription-bar-per");

    skillPers.forEach((skillPer) => {
      const per = parseFloat(skillPer.getAttribute("data-per"));
      skillPer.style.width = per + "%";

      let animatedValue = 0;
      let startTime = null;

      function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const stepPercentage = progress / 1000; // Dividing by duration in milliseconds (1000ms = 1s)

        if (stepPercentage < 1) {
          animatedValue = per * stepPercentage;
          skillPer.setAttribute("data-per", Math.floor(animatedValue) + "%");
          requestAnimationFrame(animate);
        } else {
          animatedValue = per;
          skillPer.setAttribute("data-per", Math.floor(animatedValue) + "%");
        }
      }

      requestAnimationFrame(animate);
    });
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="graph-with-img mb-130">
      <div className="container-fluid one">
        <div className="row g-lg-4 gy-5">
          <div className="col-lg-6">
            <div
              className="grap-left-img magnetic-item"
              style={{ height: "100%" }}
            >
              <img
                style={{ height: "100%" }}
                src="assets/img/home1/graph-left-img.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="garph-content pl--95">
              <div className="section-title1 two mt--20 mb-60 ">
                <h2>
                  Aploxn is a professional service provided by experts who offer
                  guidance.
                </h2>
              </div>
              <div className="eg-progress-wrap mb-60">
                <div className="eg-progress-bar-single mb-35">
                  <div className="eg-progress-bar-title">
                    <h6>Market Analaysis</h6>
                  </div>
                  <div className="eg-progress-bar">
                    <div className="subscription-bar-per" data-per={90} />
                  </div>
                </div>
                <div className="eg-progress-bar-single mb-35">
                  <div className="eg-progress-bar-title">
                    <h6>Expert Research</h6>
                  </div>
                  <div className="eg-progress-bar">
                    <div className="subscription-bar-per" data-per={95} />
                  </div>
                </div>
                <div className="eg-progress-bar-single">
                  <div className="eg-progress-bar-title">
                    <h6>Consulting Rate </h6>
                  </div>
                  <div className="eg-progress-bar">
                    <div className="subscription-bar-per" data-per={90} />
                  </div>
                </div>
              </div>
              <div className="graph-chart">
                <h4>Consulting Bar Graph</h4>
                <ResponsiveContainer width="100%" height={450}>
                  <BarChart
                    width={700}
                    height={350}
                    data={data}
                    //   margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="percentage1" fill="#789FC0" name="Consulting Rate">
                      <LabelList dataKey="percentage1" position="top" />
                    </Bar>
                    <Bar dataKey="percentage2" fill="#324662" name="Consulting percentage" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphtWithImg;
