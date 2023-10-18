package assignment;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class ConvertingRomanNumberToIntegerNumber {
	
	static int convertRomanNumberToIntegerNumber(String st)  
	{  
		Map<Character, Integer> map=new HashMap<Character, Integer>();  
		map.put('I',1);  
		map.put('V',5);  
		map.put('X',10);  
		map.put('L',50);  
		map.put('C',100);  
		map.put('D',500);  
		map.put('M',1000);    
		st=st.replace("IV","IIII");  
		st=st.replace("IX","VIIII");  
		st=st.replace("XL","XXXX");  
		st=st.replace("XC","LXXXX");  
		st=st.replace("CD","CCCC");  
		st=st.replace("CM","DCCCC");  
		int num=0;  
		for (int i = 0; i < st.length(); i++)  
		{  
			num= num + (map.get(st.charAt(i)));  
		}  
		return num;  
	} 


	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter the Roman Number:");
		String str=sc.next(); 
		int num = convertRomanNumberToIntegerNumber(str.toUpperCase());
		System.out.println("The Corresponding Integer value of " + str + " is : " + num);
		sc.close();

	}

}
