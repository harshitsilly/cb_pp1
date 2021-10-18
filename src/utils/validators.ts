const inRange = (input: string, min: number, max: number) => {

  return  input.length >= min && input.length <= max ;

  
};

export { inRange };
