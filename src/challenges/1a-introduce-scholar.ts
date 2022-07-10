interface Scholar {
  firstName: string;
  lastName: string;
  cohortNumber: number;
}

function introduceScholar(scholar: Scholar): string {



  return `${scholar.firstName} ${scholar.lastName} is an Academy Scholar, on Cohort ${scholar.cohortNumber}.`;
}

export default introduceScholar;
