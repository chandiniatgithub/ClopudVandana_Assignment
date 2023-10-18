package assignment;

import java.util.Scanner;

public class Panagram {
	
	static boolean isPanagram(String str) {
		if(str.length()<26)
			return false;
		str=str.toLowerCase();
		for(char ch='a';ch<='z';ch++) {
			if(str.indexOf(ch)==-1)
				return false;
		}
		return true;
	}

	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner sc=new Scanner(System.in);
		System.out.println("enter a string");
		String st=sc.nextLine();
		boolean res=isPanagram(st);
		if(res)
			System.out.println(st + " is a panagram ");
		else
			System.out.println(st + " is not a panagram ");
		sc.close();

	}

}
