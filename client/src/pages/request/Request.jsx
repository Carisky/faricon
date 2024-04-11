import AddRequestForm from "../../Components/Forms/AddRequestForm";
import Layout from "../layout/Layout";
import styles from "../page.module.css";

function Request() {
  return (
    <Layout>
      <div className={styles.page}>
        
        <AddRequestForm />
      </div>
    </Layout>
  );
}
export default Request;
