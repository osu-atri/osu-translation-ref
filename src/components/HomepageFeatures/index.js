import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// TODO: Needs reworking!
const FeatureList = [
  {
    title: '标题一',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        还没想好这里写啥
      </>
    ),
  },
  {
    title: '标题二',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        这里也是
      </>
    ),
  },
  {
    title: '标题三',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        还有这里
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
