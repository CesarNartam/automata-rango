import { Button, Input } from 'antd'
import { Space } from 'antd'
import { Typography, Layout} from 'antd'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { validateAutomata } from './automata'

const { Text, Title} = Typography
const { Content } = Layout

function App() {
  const formik = useFormik({
    onSubmit: (values) => {
      console.log(`the values are: ${values.input}`);
      const result = validateAutomata(values.input);

      alert(result.message);
    },
    initialValues: {
      input: "",
    },
    validationSchema: Yup.object({
      input: Yup.string().required("Campo requerido"),
    }),
  });

  return (
    <>
    <Layout style={{ width: "100%" }}>
        <Content>
          <Space direction="vertical" style={{ width: "100%"}}>
            <Title>Automata evaluador de rango</Title>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src="assets/automataRango.svg"
                alt="image of automata"
                style={{ width: "80%" }}
              />
            </div>

            <Space direction="horizontal" style={{marginTop: "2em"}}>
              <Space direction="vertical">
                <Input
                  name="input"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.input}
                  placeholder="Ingrese una cadena de acuerdo al rango mostrado"
                  size="large"
                />
                {formik.touched.input && formik.errors.input ? (
                  <Text type="danger">{formik.errors.input}</Text>
                ) : null}
              </Space>
              <Button type="primary" htmlType="submit" size="large" onClick={formik.handleSubmit}>
                Evaluar
              </Button>
            </Space>
          </Space>
        </Content>
      </Layout>     
    </>
  )
}

export default App
