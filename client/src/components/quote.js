const styleQuote = {
  widht: "100%",
  color: "#111827",
  textAlign: "center",
  marginBottom: "120px",
  //120px + 68px(height of header)
  marginTop: "188px",
};

const styleQuoteTitle = {
  fontSize: "48px",
  fontWeight: "600",
};

const styleQuoteBody = {
  color: "#6b7280",
  fontSize: "20px",
  lineHeight: "30px",
};

const Quote = () => {
  return (
    <div className="quote" style={styleQuote}>
      <div className="quote-title" style={styleQuoteTitle}>
        All Courses
      </div>
      <div className="quote-body" style={styleQuoteBody}>
        <span style={{ display: "block" }}>From beginner to advanced!</span>
        <span style={{ display: "block" }}>
          Grow to a full stack with Nico!
        </span>
      </div>
    </div>
  );
};

export default Quote;
