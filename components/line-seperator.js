const LineSeperator = props => {
  return (
    <div className="line-seperator">
      <div className="line-seperator-line" />
      {props.circle ? <div className="lines-circle" /> : null}
    </div>
  );
};

export default LineSeperator;
