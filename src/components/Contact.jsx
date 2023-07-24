export default function Contact() {
  return (
    <div className="contact--container">
      <p className="contact--head">CONTACT ME</p>
      <input
        type="text"
        className="contact--input"
        name="contact--name"
        placeholder="Name"
        autoFocus
        required
        autoComplete="false"
      ></input>
      <input
        type="email"
        className="contact--input"
        name="contact--mail"
        placeholder="e-mail"
        required
        autoComplete="false"
        autoCapitalize="false"
      ></input>
      <input
        type="text"
        className="contact--input"
        name="contact--subject"
        placeholder="Message Subject"
        required
        autoComplete="false"
      ></input>
      <textarea
        rows={5}
        type="text"
        className="contact--input"
        name="contact--message"
        placeholder="Message"
        required
        autoComplete="false"
      ></textarea>
      <div className="contact--send">
        <button type="submit">SEND</button>
      </div>
    </div>
  );
}
