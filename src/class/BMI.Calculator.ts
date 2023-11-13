class BMICalculator {
  private weightInKg: number;
  private heightInMeters: number;

  constructor(weightInKg: number, heightInMeters: number) {
    if (heightInMeters <= 0 || weightInKg <= 0) {
      throw new Error("Invalid input. Weight and height must be positive values.");
    }

    this.weightInKg = weightInKg;
    this.heightInMeters = heightInMeters;
  }

  calculateBMI(): number {
    const bmi: number = this.weightInKg / (this.heightInMeters * this.heightInMeters);
    return bmi;
  }
}

export default BMICalculator;
