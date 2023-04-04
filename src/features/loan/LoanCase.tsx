import { useSelector, useDispatch } from 'react-redux';

import { useForm } from 'react-hook-form';

import { provideName, provideSalary, LoanState, LOAN_STEPS } from './loanSlice';
import type { RootState } from '../../store';

type FormData = Pick<LoanState, 'firstName' | 'lastName'>;
type SalaryData = Pick<LoanState, 'monthlySalary'>;

export const LoanCase = () => {
  const loan = useSelector((state: RootState) => state.loan);
  const dispatch = useDispatch();
  const { register: registerU, handleSubmit: handleSubmitU } = useForm<FormData>();
  const { register: registerS, handleSubmit: handleSubmitS } = useForm<SalaryData>();

  const handleUserData = (values: FormData) => {
    dispatch(provideName(values));
  }

  const handleSalaryData = (values: SalaryData) => {
    dispatch(provideSalary({ salary: values.monthlySalary }));
  }

  if (loan.step === 1) {
    return (
      <form key={LOAN_STEPS.INITIAL} onSubmit={handleSubmitU(handleUserData)}>
        <div>
          First name: <input type="text" {...registerU('firstName')} />
        </div>
        <div>
          Last name: <input type="text" {...registerU('lastName')} />
        </div>
        <button type="submit">Next step</button>
      </form>
    );
  } else if (loan.step === 2) {
    return (
      <form key={LOAN_STEPS.SALARY} onSubmit={handleSubmitS(handleSalaryData)}>
        <div>
          Monthly salary: <input type="text" defaultValue={loan.monthlySalary} {...registerS('monthlySalary')} />
        </div>
        <button type="submit">Next step</button>
      </form>
    );
  } else if (loan.step === 3) {
    return (
      <div>
        <p>First name: {loan.firstName}</p>
        <p>Last name: {loan.lastName}</p>
        <p>Monthly salary: {loan.monthlySalary}</p>
      </div>
    );
  }
  return null;
}