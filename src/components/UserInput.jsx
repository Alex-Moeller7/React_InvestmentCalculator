export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initital (Principal) Investment</label>
          <input
            type="number"
            required
            placeholder="10000"
            value={UserInput.initialInvestment}
            onChange={(event) => onChange("initialInvestment", event.target.value)}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            placeholder="1500"
            value={UserInput.annualInvestment}
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
            value={UserInput.expectedGrowth}
            onChange={(event) => onChange("expectedGrowth", event.target.value)}
          />
        </p>
        <p>
          <label>Number of Years</label>
          <input
            type="number"
            placeholder="10"
            required
            value={UserInput.duration}
            onChange={(event) => onChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
