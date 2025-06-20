(
    () => {

        // Not applying the principle of single responsability

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

            constructor({ name, gender, birthdate }: PersonProps) {
                this.name = name;
                this.gender = gender;
                this.birthdate = birthdate;
            }
        }

        interface UserProps {
            email: string,
            role: string,
            birthdate: Date;
            gender: Gender;
            name: string;
        }

        class User extends Person {
            public email: string;
            public role: string;
            private lastAccess: Date;

            constructor({ email, role, name, gender, birthdate }: UserProps) {
                super({ name, gender, birthdate });
                this.lastAccess = new Date();
                this.email = email;
                this.role = role;
            }

            checkCredentials(): boolean {
                return true;
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

        class UserSettings extends User {

            public workingDirectory: string;
            public lastOpenFolder: string;

            constructor({ workingDirectory, lastOpenFolder, email, role, name, gender, birthdate }: UserSettingsProps) {
                super({ email, role, name, gender, birthdate });
                this.workingDirectory = workingDirectory;
                this.lastOpenFolder = lastOpenFolder;
            }
        }

        const userSettings = new UserSettings({
            workingDirectory: '/usr/home',
            lastOpenFolder: 'home',
            email: 'santi@gmail.com',
            role: 'Admin',
            name: 'Santiago',
            gender: 'M',
            birthdate: new Date('2000-01-20'),
        });

        console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials() });
    }
)()