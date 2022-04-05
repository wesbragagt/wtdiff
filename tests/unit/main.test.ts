import wtdiff from "../../src/main";

describe("extractChanges", () => {
  it("outputs an object with only the changed properties", () => {
    const obj1 = {
      name: "foobar",
      working: true,
      job: "developer",
    };
    const obj2 = {
      name: obj1.name,
      working: false,
      job: "n/a",
    };
    const actual = wtdiff.extractChanges(obj1, obj2);
    expect(actual).toStrictEqual({ working: false, job: "n/a" });
  });
  it("extracts deeply nested changes", () => {
    const obj1 = {
      name: "dude",
      profile: {
        contact: {
          phone: "+12344567890",
        },
      },
    };
    const obj2 = {
      name: "dude",
      profile: {
        contact: {
          phone: "+11231231234",
        },
      },
    };
    const actual = wtdiff.extractChanges(obj1, obj2);
    expect(actual).toStrictEqual({
      profile: { contact: { phone: obj2.profile.contact.phone } },
    });
  });
});
