
export function NumberGen() {
   const random = parseInt(Math.random() * 11);
   return random
};

export function Validate(n1, n2, input) {

   const RightAnswer = n1 * n2;

   if (RightAnswer == input) {
      return true
   } else {
      return false
   }
};