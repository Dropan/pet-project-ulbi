import { Button } from '@/shared/ui/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/CounterSlice';

export const Counter = () => {
  const counterValue = useCounterValue();
  const { decrement, increment } = useCounterActions();

  return (
    <div>
      <h1 data-testid="value-title">
        {counterValue}
      </h1>
      <Button
        data-testid="increment-btn"
        onClick={() => increment()}
      />
      <Button
        data-testid="decrement-btn"
        onClick={() => decrement()}
      />
    </div>
  );
};
