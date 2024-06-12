export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Inititial (Principal) Investment</label>
          <input
            type="number"
            required
            placeholder="10000"
            value={userInput.initialInvestment}
            onChange={(event) => onChange("initialInvestment", event.target.value)}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            placeholder="1000"
            value={userInput.annualInvestment}
            onChange={(event) => onChange("annualInvestment", event.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Growth</label>
          <input
            type="number"
            required
            placeholder="5"
            value={userInput.expectedReturn}
            onChange={(event) => onChange("expectedReturn", event.target.value)}
          />
        </p>
        <p>
          <label>Number of Years</label>
          <input
            type="number"
            required
            placeholder="10"
            value={userInput.duration}
            onChange={(event) => onChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
