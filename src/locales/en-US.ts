export default {
	common: {
		add: 'Add',
		addSuccess: 'Add Success',
		edit: 'Edit',
		editSuccess: 'Edit Success',
		delete: 'Delete',
		deleteSuccess: 'Delete Success',
		save: 'Save',
		saveSuccess: 'Save Success',
		reset: 'Reset',
		action: 'Action',
		export: 'Export',
		exportSuccess: 'Export Success',
		import: 'Import',
		importSuccess: 'Import Success',
		clear: 'Clear',
		clearSuccess: 'Clear Success',
		yes: 'Yes',
		no: 'No',
		confirm: 'Confirm',
		download: 'Download',
		noData: 'No Data Available',
		wrong: 'Something went wrong, please try again later.',
		success: 'Operation Successful',
		failed: 'Operation Failed',
		verify: 'Login',
		unauthorizedTips: 'Unauthorized, please login first or',
		loginTips: 'Unauthorized, please login first or',
		registerTips: 'Unauthorized, please first',
		orRegister: 'or register.',
		login: 'Login',
		signInBtn: 'Sign In',
		orUseYourAccount: 'or use your account',
		forgotYourPassword: 'Forgot your password?',
		register: 'Register',
		fullStop: '.',
		or: 'or',
		logoutConfirm: 'Are you sure you want to log out?',
		logoutSuccess: 'Logout Successful',
		refresh: 'Refresh',
		upload: 'Upload',
		view: 'View',
		chat: 'Chat',
		search: 'Search',
		enabled: 'Enabled',
		disabled: 'Disabled',
		admin: 'Admin Panel',
		status: 'Status',
		all: 'All',
		date: 'Date',
		enableAISearch: 'Enable AI Search',
		noFile: 'No Files Available',
		log: 'Log',
		send: 'Send',
		shiftEnter: 'Shift+Enter for New Line',
		chatGPT: 'ChatGPT',
		logout: 'Log Out',
		terms1: 'By registering, you agree to the',
		terms2: 'and',
		terms3: '.',
		termsOfServiceRequired: 'Please accept the terms of service',
		goodMorning: 'Good Morning',
		goodAfternoon: 'Good Afternoon',
		goodEvening: 'Good Evening',
		startTime: 'Start Time',
		endTime: 'End Time',
		prePage: 'Previous Page',
		nextPage: 'Next Page',
		example: 'Example',
		noPermission: 'No Permission',
		commingSoon: 'Coming Soon',
		textToImage: 'Text to Image',
	},
	chat: {
		newChatButton: 'New Chat',
		newRoleButton: 'Add Assistant',
		placeholder: 'Say something... (Shift + Enter = New Line)',
		placeholderMobile: 'Say something...',
		copy: 'Copy',
		copied: 'Copy Successful',
		copyCode: 'Copy Code',
		clearChat: 'Clear Chat',
		clearChatConfirm: 'Clear this chat?',
		exportImage: 'Save Chat as Image',
		exportImageConfirm: 'Save chat as image?',
		uploadCommonAIData: 'Upload AI Data File',
		exportSuccess: 'Save Successful',
		exportFailed: 'Save Failed',
		deleteMessage: 'Delete Message',
		deleteMessageConfirm: 'Delete this message?',
		deleteHistoryConfirm: 'Delete this record?',
		clearHistoryConfirm: 'Clear chat history?',
		preview: 'Preview',
		showRawText: 'Show Raw Text',
		emailRequired: 'Email cannot be empty',
		passwordRequired: 'Password cannot be empty',
		passwordAgain: 'Please re-enter password',
		passwordInconsistent: 'Passwords do not match',
		registerSuccess: 'Registration Successful!',
		feishuAuthFail: 'Feishu login authorization failed, please re-login.',
		githubAuthFail: 'GitHub login authorization failed, please re-login.',
		myFavorites: 'AI Roles',
		chatGPT35: 'ChatGPT-3.5',
		chat: 'Chat',
		localAI: 'Assistant',
		newChat: 'New Chat',
		newChatLocalAI: 'New Local AI',
		chatGPTIntro: 'I am Chat AI, your personal AI assistant. Feel free to ask me anything.',
		tryAsk: 'You can try asking me:',
		exchange: 'Exchange',
		examples: 'Examples',
		capabilities: 'Capabilities',
		limitations: 'Limitations',
		localAISlogan: 'Leverage ChatGPT, Langchain, and other tools to extend AI knowledge to local documents. Easily upload PDFs 📜, TXTs 🖹, MDs 📑, CSVs 📊, WORDs 📝, EXCELs 📎, and get relevant answers. Unlock unlimited knowledge and explore new realms of intelligent Q&A.',
		id: 'ID',
		uploadedFilename: 'Uploaded File',
		deleteFile: 'Delete File',
		deleteFileConfirm: 'Delete file?',
		deleteKnowledgeBase: 'Delete Knowledge Base',
		deleteKnowledgeBaseConfirm: 'Delete knowledge base?',
		startToTalk: 'Start Chatting',
		newLocalAI: 'Create New Local Vector Knowledge Base',
		plugins: 'Plugins',
		pluginsManagement: 'Plugins Management',
	},
	setting: {
		chatGPTSettings: 'ChatGPT Parameter Settings',
		setting: 'Settings',
		general: 'General',
		advanced: 'Advanced',
		config: 'Configuration',
		avatar: 'Avatar',
		avatarLink: 'Avatar Link',
		name: 'Name',
		description: 'Description',
		nickname: 'Nickname',
		nicknamePlaceholder: 'Enter Nickname',
		role: 'Assistant Settings',
		systemPromptMessage: 'System Prompt Message',
		temperature: 'Sampling Randomness',
		temperatureTip: 'Higher values (e.g., 0.8) make output more random, while lower values (e.g., 0.2) make it more focused and deterministic.',
		top_p: 'Top-p Sampling',
		top_pTip: 'Similar to "Sampling Randomness". Typically adjust either this or "Sampling Randomness", not both.',
		maxTokens: 'Max Tokens',
		maxTokensTip: 'The maximum number of tokens allowed per chat.',
		presencePenalty: 'Presence Penalty',
		presencePenaltyTip: 'A number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the likelihood of discussing new topics.',
		frequencyPenalty: 'Frequency Penalty',
		frequencyPenaltyTip: 'A number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, reducing the likelihood of verbatim repetition.',
		historyCount: 'Chat History Count',
		historyCountTip: 'Limit on the number of chat history entries per request.',
		resetUserInfo: 'Reset User Information',
		chatHistory: 'Chat History',
		theme: 'Theme',
		language: 'Language',
		api: 'API',
		timeout: 'Timeout',
		socks: 'Socks',
		email: 'Email',
		account: 'Account Management',
		emailPlaceholder: 'Enter Email',
		createUser: 'Create Account',
		createUserSuccess: 'Account Creation Successful!',
		createUserFailed: 'Account Creation Failed!',
		password: 'Password',
		confirmPassword: 'Confirm Password',
		chatGPTParameterSettings: 'Parameters',
	},
	store: {
		siderButton: 'AI Assistant Store',
		local: 'Local',
		online: 'Online',
		icon: 'Icon',
		title: 'Title',
		description: 'Description',
		greetings: 'Greetings',
		category: 'Category',
		clearStoreConfirm: 'Clear data?',
		importPlaceholder: 'Paste JSON data here',
		onlineImportWarning: 'Warning: Check the source of the JSON file!',
		downloadError: 'Check network status and JSON file validity',
		roleIcon: 'Assistant Icon',
		roleTitle: 'Assistant Name',
		roleDescription: 'Assistant Description',
		promptStore: 'AI Roles',
		roleType: 'Assistant Type',
	},
	upload: {
		aiMode: 'AI Mode',
		textUpload: 'Text Corpus',
		fileUpload: 'File Corpus',
		ingestText: 'AI Corpus',
		uploadIngestText: 'Upload Text',
		aiDataRequired: 'AI Corpus cannot be empty',
		uploadFileSuccess: 'File Upload Successful',
		uploadFileFailed: 'File Upload Failed',
		uploadFileTips: 'Upload AI corpus file, you can ask AI about the file content in 1-3 minutes!',
		uploadTextTips: 'Upload AI corpus text, you can ask AI about the text content immediately!',
		uploadFileFormat: 'Supports PDF, TXT, MD, Markdown, CSV, WORD, EXCEL formats',
		uploadFileSizeLimit: 'File size cannot exceed {size}',
	},
	localAI: {
		name: 'Name',
		description: 'Description (at least 20 words)',
		isGlobal: 'Global Knowledge Base',
		globalKnowledgeBase: 'Global Knowledge Base',
		uploadPlugin: 'Upload Plugin',
		fromFile: 'Tar, zip file',
		fromGitHub: 'GitHub',
		deletePlugin: 'Delete Plugin',
		deletePluginConfirm: 'Delete plugin?',
		uploadPluginWithRepo: 'Upload Plugin',
		repoUrl: 'Repository URL',
		usePlugins: 'Use Plugins',
		localVectorKnowledgeBase: 'Local Vector Knowledge Base',
	},
	myFav: {
		all: 'All',
		likes: 'Likes',
		character: 'Character',
		education: 'Education',
		travel: 'Travel',
		social: 'Social',
		game: 'Game',
		translate: 'Translate',
		develop: 'Develop',
		tool: 'Tool',
		medical: 'Medical',
		food: 'Food',
		marketing: 'Marketing',
		other: 'Other',
	},
	auth: {
		signInBtn: 'Sign In',
		signInTitle: 'Welcome Back!',
		signInSubTitle: 'Enter the world of AI, enjoy an intelligent experience, and start a personalized tech journey effortlessly.',
		signUpBtn: 'Sign Up',
		signUpTitle: 'AI Voyage',
		signUpSubTitle: 'Integrate into the intelligent world, explore unknown territories, embark on an AI journey, and write an innovative future.',
		createAccount: 'Create Account',
		signInSuccess: 'Login Successful',
		signInFailed: 'Incorrect Username or Password',
		signInValidate: 'Username or Password cannot be empty',
		contactAdmin: 'Contact Administrator',
		verificationCode: 'Verification Code',
		resendAfterSeconds: 'Resend after {seconds} seconds',
		sendVerificationCode: 'Send Verification Code',
	},
	admin: {
		personalCenter: 'Personal Center',
		aiAssistantManagement: 'AI Assistant Management',
		isAdmin: 'Admin',
		isFeiShuUser: 'Feishu User',
		isGithubUser: 'GitHub User',
		deleteAIAssistant: 'Delete AI Assistant',
		toggleAIAssistant: 'Enable/Disable AI Assistant',
		newAIAssistant: 'Create AI Assistant',
		editAIAssistant: 'Edit AI Assistant',
		iconTips: '(**You can search for icons at https://icon-sets.iconify.design/**)',
		invalidEmail: 'Enter a valid email',
		userType: 'User Type',
		superAdmin: 'Super Admin',
		adminUser: 'Admin',
		normalUser: 'Regular User',
		premiumUser: 'Premium User',
		model: 'Model',
		aiMode: 'AI Mode',
		userManagement: 'User Management',
		upgrade: 'Upgrade',
		deleteUser: 'Delete User',
		deleteUserTips: 'Are you sure you want to delete user {name}?',
		upgradeUser: 'Upgrade User',
		upgradeUserTips: 'Are you sure you want to upgrade {name} to premium user?',
		userInfo: 'User Information',
	},
	digitalPerson: {
		title: 'Digital Person',
		slogan: 'Digital Person, awaken the clone of sound, AI Digital Person - making every word vivid.',
		talkToDigitalPerson: 'Talk to Digital Person',
		notice: 'If there are any copyright issues with the voice, AI voice cloning will be immediately revoked. Respect the original, protect copyrights.',
	},
	textToImages: {
		imagesPreview: 'Text to Image Preview',
		genImages: 'Generate Images',
		description: 'Description',
		describeImage: 'Describe the image you want to create...',
		appendTextToImageRequests: 'Append Text to Image Requests',
		appendTextToImageRequestsTips: 'Add {times} text to image requests?',
		appendTextToImageRequestsSuccess: 'Successfully added text to image requests',
		remainingTextToImageRequests: 'Remaining Text to Image Requests',
		nTimes: '{times} times',
		totalImageRequests: 'Total Text to Image Requests',
		generate: 'Generate',
		genRecords: 'Generation Records',
		visibleForEveryone: 'Visible to Everyone',
	}
}