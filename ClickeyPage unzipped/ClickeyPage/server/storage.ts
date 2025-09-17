import { type User, type InsertUser, type LoginRequest, type UpdateProfileRequest } from "@shared/schema";
import { randomUUID } from "crypto";
import bcrypt from "bcrypt";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUserProfile(id: string, profile: UpdateProfileRequest): Promise<User | undefined>;
  validateMPIN(email: string, mpin: string): Promise<User | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;

  constructor() {
    this.users = new Map();
    // Add a default user for testing - BRAHMMY from the PDF
    this.initializeDefaultUser();
  }

  private async initializeDefaultUser() {
    const hashedMPIN = await bcrypt.hash("1234", 10);
    const defaultUser: User = {
      id: "default-user-id",
      email: "brah******my@gmail.com",
      mpin: hashedMPIN,
      completeName: "BRAHMMY SANTOS",
      completeAddress: "123 Sample Street, Manila, Philippines",
      age: 28,
      dateOfBirth: "1995-06-15",
      gender: "Male",
      weight: 70,
      height: 175,
      createdAt: new Date().toISOString(),
    };
    this.users.set(defaultUser.id, defaultUser);
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.email === email,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    // Hash the MPIN before storing
    const hashedMPIN = await bcrypt.hash(insertUser.mpin, 10);
    
    const id = randomUUID();
    const user: User = { 
      ...insertUser, 
      id,
      mpin: hashedMPIN,
      createdAt: new Date().toISOString(),
    };
    this.users.set(id, user);
    return user;
  }

  async updateUserProfile(id: string, profile: UpdateProfileRequest): Promise<User | undefined> {
    const user = this.users.get(id);
    if (!user) return undefined;
    
    const updatedUser = { ...user, ...profile };
    this.users.set(id, updatedUser);
    return updatedUser;
  }

  async validateMPIN(email: string, mpin: string): Promise<User | undefined> {
    const user = await this.getUserByEmail(email);
    if (!user) return undefined;
    
    const isValid = await bcrypt.compare(mpin, user.mpin);
    return isValid ? user : undefined;
  }
}

export const storage = new MemStorage();
