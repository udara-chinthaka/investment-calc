export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChange(event.target.value, "initialInvestment")
            }
          ></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChange(event.target.value, "annualInvestment")
            }
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Investment</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) => onChange(event.target.value, "expectedReturn")}
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onChange(event.target.value, "duration")}
          ></input>
        </p>
      </div>
    </section>
  );
}
