import { useState } from "react";
import useFireBaseStorage from "../../hooks/useFireBaseStorage";
import { Button, Checkbox, Form, Input, Upload } from "antd";
import { storage } from "../../firebase/firebase";
import { ref, uploadBytes } from "firebase/storage";

function Test() {
  const [allCard, setAllCard] = useState<any>([]);

  const { url, loading, error } = useFireBaseStorage(
    "clother/17a39039fc676fa61dc75e4f1ccc70ba.jpeg"
  );

  const [file, setFile] = useState(null);

  const handleFileUpload = (doc) => {
    console.log(doc);

    setFile(doc);
    return doc;
  };

  const dummyRequest = ({ file, onSuccess }): void => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  const onFinish = async (values: any) => {
    const storageRef = ref(storage, "clother/" + file.name);
    uploadBytes(storageRef, file).then((snapshot) => {
      const imageName = snapshot.metadata.name;
      setAllCard([...allCard, { ...values, image: imageName }]);
    });
    // const fileRef = storageRef.child(file.name);
    // await fileRef.put(file);
    // console.log("Success:", values);
    // setAllCard([...allCard, { ...values, ...{ image: file.name } }]);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  //   console.log(url);
  //   console.log(loading);

  return (
    <>
      <ul>
        {allCard.map((el, index) => (
          <li key={index}>
            <p>{el.username}</p>
            <img src={url} />
          </li>
        ))}
      </ul>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label="Username">
          <Upload
            listType="picture"
            customRequest={dummyRequest}
            beforeUpload={handleFileUpload}
            accept="image/*"
            showUploadList={true}
            maxCount={1}
          >
            <Button>Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default Test;
