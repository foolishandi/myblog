import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "前后端技术栈",
    Svg: require("@site/static/img/3U_Server.svg").default,
    description: (
      <>
        前端包括三大件、react、vue、angular1.8、jquery等，后端主要为nodejs，mysql，graphql,restful
        api等
      </>
    ),
  },
  {
    title: "DevOps",
    Svg: require("@site/static/img/Cloud_Database.svg").default,
    description: <>持续交付流水线相关,k8s等</>,
  },
  {
    title: "项目问题",
    Svg: require("@site/static/img/Firewalld2.svg").default,
    description: <>常见问题记录</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
