export default function CustomInput({label, placeholder, name, type}) {
  
  return (
    <div className="flex flex-col">
      <label htmlFor="custom-input" className="pb-1">
        {label}
      </label>
        <div className="flex items-center">
          <span></span>
          <input 
            id="custom-input"
            type={type}
            name={name}
            placeholder={placeholder}
            className="w-full border-2 border-green-400 outline-none rounded-md h-10"/>
        </div>
    </div>
  );
}

/* <div class="signupFrm">
    <form action="" class="form">
      <h1 class="title">Sign up</h1>

      <div class="inputContainer">
        <input type="text" class="input" placeholder="a">
        <label for="" class="label">Email</label>
      </div>

      <div class="inputContainer">
        <input type="text" class="input" placeholder="a">
        <label for="" class="label">Username</label>
      </div>

      <div class="inputContainer">
        <input type="text" class="input" placeholder="a">
        <label for="" class="label">Password</label>
      </div>

      <div class="inputContainer">
        <input type="text" class="input" placeholder="a">
        <label for="" class="label">Confirm Password</label>
      </div>

      <input type="submit" class="submitBtn" value="Sign up">
    </form>
  </div> */