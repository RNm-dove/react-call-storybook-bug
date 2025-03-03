import { useCallback } from "react";
import { Confirm } from "./Confirm";

export function ConfirmButton ({color}:{color?: 'red' | 'blue'}) {
      const onSubmit = useCallback(() => {
        return Confirm.call({
          message: 'Are you sure?',
        }).then(accepted => {
          if (!accepted) {
            return;
          }
    
          alert('Confirmed!')
        })
      }, []);
      
    return <button onClick={onSubmit} style={{
      color: color
    }}>Click Me!</button>
}