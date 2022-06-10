// @ts-ignore
import styles from "./index.module.css";

// これがあるとビルドに失敗する（public が邪魔
// class A {
//   constructor(public a: string) {}
// }

export const C = () => {
  return <div className={styles.wrapper}>hello</div>;
};
export default C;
