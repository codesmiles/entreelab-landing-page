const RequestDemo = () => {
  const data = [
    {
      name: `fname`,
      text: `first name*`,
      type: `text`,
      placeholder: `enter your first name`,
    },
    {
      name: `lname`,
      text: `last name*`,
      type: `text`,
      placeholder: `enter your last name`,
    },
    {
      name: `phone`,
      text: `phone no.`,
      type: `tel`,
      placeholder: `enter phone no`,
    },
    {
      name: `businessName`,
      text: `business name`,
      type: `text`,
      placeholder: `what's your business name`,
    },
    {
        name: `businessEmail`,
        text: `business email`,
        type: `text`,
        placeholder: `what's your business email`,
      },
      {
        name: `jobTitle`,
        text: `job title`,
        type: `text`,
        placeholder: `what's your job title`,
      }
  ];
  return (
    <section className={`bg-[#3397C8] py-10 text-["Lato"]`}>
      <h1 className={`text-center text-[#07131A] font-bold text-[20px] mb-5`}>
        Request a Demo
      </h1>
      <form action="/" method="post">
        <div>
          <label htmlFor="firstName">first name</label>
          <input type="text" name="firstName" id="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">last name</label>
          <input type="text" name="lastName" id="lastName" />
        </div>
        <div>
          <label htmlFor="contact">phone no.</label>
          <input type="phone" name="contact" id="contact" />
        </div>
        <div>
          <label htmlFor="businessName">business name</label>
          <input type="text" name="businessName" id="businessName" />
        </div>
        <div>
          <label htmlFor="businessEmail">business email</label>
          <input type="email" name="businessEmail" id="businessEmail" />
        </div>
        <div>
          <label htmlFor="jobTitle">job title</label>
          <input type="text" name="jobTitle" id="jobTitle" />
        </div>

        <label htmlFor="additionalComment">additional comment</label>
        <textarea
          name="additionalComment"
          id="additionalComment"
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit">submit</button>
      </form>
    </section>
  );
};

export default RequestDemo;
