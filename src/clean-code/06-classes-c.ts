(
    () => {

        // Applying the principle of single responsability
        // Prioritizing composition over inheritance

        type Gender = 'M' | 'F';

        interface PersonProps {
            birthdate: Date;
            gender: Gender;
            name: string;
        }

        class Person {

            public birthdate: Date;
            public gender: Gender;
            public name: string;

            constructor({
                birthdate,
                gender,
                name
            }: PersonProps) {
                this.name = name;
                this.gender = gender;
                this.birthdate = birthdate;
            }
        }

        interface UserProps {
            email: string,
            role: string,
        }

        class User {

            public email: string;
            public lastAccess: Date;
            public role: string;

            constructor({
                email,
                role
            }: UserProps) {
                this.lastAccess = new Date();
                this.email = email;
                this.role = role;
            }

            checkCredentials(): boolean {
                return true;
            }
        }

        interface SettingsProps {
            workingDirectory: string;
            lastOpenFolder: string;
        }

        class Settings {

            public workingDirectory: string;
            public lastOpenFolder: string;

            constructor({
                lastOpenFolder,
                workingDirectory
            }: SettingsProps) {
                this.workingDirectory = workingDirectory;
                this.lastOpenFolder = lastOpenFolder;
            }
        }

        interface UserSettingsProps {
            workingDirectory: string;
            lastOpenFolder: string;
            email: string;
            role: string;
            birthdate: Date;
            gender: Gender;
            name: string;
        }

        class UserSettings {

            public person: Person;
            public user: User;
            public settings: Settings;

            constructor({
                name, gender, birthdate,
                email, role,
                lastOpenFolder, workingDirectory
            }: UserSettingsProps) {

                this.person = new Person({ name, gender, birthdate });
                this.user = new User({ email, role });
                this.settings = new Settings({ lastOpenFolder, workingDirectory });
            }
        }

        const userSettings = new UserSettings({
            birthdate: new Date('2000-01-20'),
            email: 'santi@gmail.com',
            gender: 'M',
            lastOpenFolder: 'home',
            name: 'Santiago',
            role: 'Admin',
            workingDirectory: '/usr/home',
        });

        console.log({ userSettings, areCredentialsValid: userSettings.user.checkCredentials() });
    }
)()