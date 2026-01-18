function TextInput({ text, setText }) {
  return (
    <textarea
      style={{ width: 400, height: 250 }}
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}

export default TextInput;
