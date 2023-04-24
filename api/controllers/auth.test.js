
const meeseOS = require("meeseOS");
const fs = require("fs-extra");
const path = require("path");
const Auth = require("./auth.js");
const Filesystem = require("../src/filesystem.js");
const { Response } = require("jest-express/lib/response");
const { Request } = require("jest-express/lib/request");


const userInput = {
		moderator_user_name: "jest",
		moderator_email: "jest",
		password:"",
	};

describe("user registeraion", () => {
describe( "should return the user payload",() =>{
    it ("return the user payload", () =>{

    })

})

describe("givne the passwords do not match", ()=>{
    it ("should return an error", () =>{

    })
})
describe("given the user service throws", () =>{
    it("should handle th error", ()=>{

    })
})

describe("Create user session", () =>{
    describe("given the username and password are valid", () =>{
        it("should return a signed accessToken and refresh token ", ()=>{
    
        })
    }
    )
})

});


	

	// beforeEach(() => {
	// 	request = new Request();
	// 	request.session = {
	// 		save: jest.fn((cb) => cb()),
	// 		destroy: jest.fn((cb) => cb()),
	// 	};

	// 	response = new Response();
	// });

	// afterEach(() => {
	// 	request.resetMocked();
	// 	response.resetMocked();
	// });

	// beforeAll(() =>
	// 	meeseOS().then(async (c) => {
	// 		core = c;
	// 		c.make("meeseOS/fs");
	// 		filesystem = new Filesystem(core);
	// 		await filesystem.init();

	// 		await filesystem.mount({
	// 			name: "jest",
	// 			attributes: {
	// 				root: "/tmp",
	// 			},
	// 		});
	// 	})
	// );

	// afterAll(() => core.destroy());

	// test("#constructor", () => {
	// 	auth = new Auth(core);
	// });

	// test("#constructor - should fall back to null adapter", () => {
	// 	auth = new Auth(core, {
	// 		adapter: () => {
	// 			throw new Error("Simulated failure");
	// 		},
	// 		denyUsers: ["jestdeny"],
	// 	});

	// 	expect(auth.adapter).not.toBe(null);
	// });

	// test("#init", () => {
	// 	return expect(auth.init()).resolves.toBe(true);
	// });

	// test("#login - fail on error", async () => {
	// 	await auth.login(request, response);

	// 	expect(response.status).toBeCalledWith(403);
	// 	expect(response.json).toBeCalledWith({
	// 		error: "Invalid login or permission denied",
	// 	});
	// });

	// test("#login - success", async () => {
	// 	request.setBody({ user_name: "jest", password: "jest" });

	// 	await auth.login(request, response);

	// 	expect(response.status).toBeCalledWith(200);
	// 	expect(request.session.user).toMatchObject(profile);
	// 	expect(request.session.save).toBeCalled();
	// 	expect(response.json).toBeCalledWith(expect.objectContaining(profile));
	// });

	// test("#login - createHomeDirectory string", async () => {
	// 	request.setBody({ username: "jest", password: "jest" });

	// 	await auth.login(request, response);
	// 	request.fields = {
	// 		path: "home:/.desktop/.shortcuts.json",
	// 	};

	// 	const result = await filesystem.request("exists", request);
	// 	expect(result).toBe(true);
	// });

	// test("#login - createHomeDirectory array", async () => {
	// 	request.setBody({ moderator_user_name: "jest", password: "jest" });

	// 	const dirpath = path.resolve(
	// 		core.configuration.root,
	// 		"homeDirFolder"
	// 	);
	// 	core.configuration.vfs.home.template = dirpath;

	// 	await auth.login(request, response);

	// 	request.fields = {
	// 		path: "home:/exampleEmptyFile.xml",
	// 	};
	// 	const fileExists = await filesystem.request("exists", request);
	// 	expect(fileExists).toBe(true);

	// 	request.fields = {
	// 		path: "home:/exampleFileWithContents.txt",
	// 	};

	// 	let chunks = [];
	// 	const fileStream = await filesystem.request("readfile", request, response);
	// 	for await (let chunk of fileStream) {
	// 		chunks.push(chunk);
	// 	}

	// 	const fileContents = Buffer.concat(chunks).toString();
	// 	expect(fileContents).toBe("this is proof that copying a folder works :)");
	// });

	// test("#login - fail on denied user", async () => {
	// 	request.setBody({ moderator_user_name: "jestdeny", password: "jest" });

	// 	await auth.login(request, response);

	// 	expect(response.status).toBeCalledWith(403);
	// 	expect(response.json).toBeCalledWith({
	// 		error: "Invalid login or permission denied",
	// 	});
	// });

	// test("#login - fail on missing groups", async () => {
	// 	auth.options.requiredGroups = ["required"];

	// 	request.setBody({ moderator_user_name: "jest", password: "jest" });

	// 	await auth.login(request, response);

	// 	expect(response.status).toBeCalledWith(403);
	// 	expect(response.json).toBeCalledWith({
	// 		error: "Invalid login or permission denied",
	// 	});
	// });

	// test("#logout", async () => {
	// 	await auth.logout(request, response);

	// 	expect(request.session.destroy).toBeCalled();
	// 	expect(response.json).toBeCalledWith({
    //         error: "Logout did not happend",

    //     });
	// });

	// test("#register", async () => {
	// 	request.setBody({ moderator_user_name: "jest", password: "jest" });

	// 	await auth.register(request, response);

	// 	expect(response.json).toBeCalledWith({ moderator_user_name: "jest" });
	// });

	// test("#destroy", async () => {
	// 	await auth.destroy();
	// 	auth = undefined;
	// }
    
    // );
